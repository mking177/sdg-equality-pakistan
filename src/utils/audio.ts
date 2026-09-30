// Web Audio API harmonic sound generator for museum exhibition ambiance

class ExhibitionAudio {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscs: OscillatorNode[] = [];

  public init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch {
      // AudioContext not supported
    }
  }

  public toggle(): boolean {
    this.init();
    if (!this.ctx || !this.masterGain) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      // Fade out
      this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
      setTimeout(() => {
        this.stopOscillators();
        this.isPlaying = false;
      }, 1200);
      return false;
    } else {
      // Start calm harmonic drone
      this.startOscillators();
      this.masterGain.gain.linearRampToValueAtTime(0.05, this.ctx.currentTime + 1.5);
      this.isPlaying = true;
      return true;
    }
  }

  private startOscillators() {
    if (!this.ctx || !this.masterGain) return;
    this.stopOscillators();

    // Pentatonic calm chords (D minor 9 / ambient museum exhibition soundscape)
    // 73.42Hz (D2), 110.00Hz (A2), 146.83Hz (D3), 220.00Hz (A3), 261.63Hz (C4), 329.63Hz (E4)
    const freqs = [73.42, 110.0, 146.83, 220.0, 261.63, 329.63];

    freqs.forEach((f, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime);

      // Low pass filter for warm organic timbre
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + idx * 80, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.015 / (idx + 1), this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.oscs.push(osc);
    });
  }

  public playChime(success = true) {
    if (!this.ctx || this.ctx.state === 'suspended') return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(success ? 523.25 : 349.23, now); // C5 or F4
      osc.frequency.exponentialRampToValueAtTime(success ? 659.25 : 440.0, now + 0.2); // E5 or A4

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.8);
    } catch {
      // Ignore
    }
  }

  private stopOscillators() {
    this.oscs.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignore
      }
    });
    this.oscs = [];
  }

  public getActive(): boolean {
    return this.isPlaying;
  }
}

export const exhibitionAudio = new ExhibitionAudio();
