import { Component } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public botanisms: string[] = [];
  public checked: boolean[] = [];

  constructor() {
    this.initializeBotanisms();
  }

  public toggleBotanism(index: number): void {
    this.checked[index] = !this.checked[index];

    this.checkForWin();
  }

  private checkForWin(): void {
    if (this.checkColumns()) {
      this.showVictory();
    }

    if (this.checkRows()) {
      this.showVictory();
    }

    if (this.checkDiagonals()) {
      this.showVictory();
    }
  }

  private showVictory(): void {
    const element = document.getElementById("modal") as HTMLElement;
    const modal = new Modal(element);
    modal.show();
  }

  private checkColumns(): boolean {
    return (this.checked[0] && this.checked[5] && this.checked[10] && this.checked[14] && this.checked[19])
      || (this.checked[1] && this.checked[6] && this.checked[11] && this.checked[15] && this.checked[20])
      || (this.checked[2] && this.checked[7] &&  this.checked[16] && this.checked[21])
      || (this.checked[3] && this.checked[8] && this.checked[12] && this.checked[17] && this.checked[22])
      || (this.checked[4] && this.checked[9] && this.checked[13] && this.checked[18] && this.checked[23]);
  }

  private checkRows(): boolean {
    return (this.checked[0] && this.checked[1] && this.checked[2] && this.checked[3] && this.checked[4])
      || (this.checked[5] && this.checked[6] && this.checked[7] && this.checked[8] && this.checked[9])
      || (this.checked[10] && this.checked[11] && this.checked[12] && this.checked[13])
      || (this.checked[14] && this.checked[15] && this.checked[16] && this.checked[17] && this.checked[18])
      || (this.checked[19] && this.checked[20] && this.checked[21] && this.checked[22] && this.checked[23]);
  }

  private checkDiagonals(): boolean {
    return (this.checked[0] && this.checked[6] && this.checked[17] && this.checked[23])
      || (this.checked[4] && this.checked[8] && this.checked[15] && this.checked[19]);
  }

  private initializeBotanisms(): void {
    for (let i = 0; i < 24; i++) {
      this.botanisms.push(this.getNewBotanism());
      this.checked.push(false);
    }
  }

  private getNewBotanism(): string {
    var botanism = this.allBotanisms[Math.floor(Math.random() * this.allBotanisms.length)];
    if (!this.botanisms?.includes(botanism)) {
      return botanism;
    }
    return this.getNewBotanism();
  }

  private readonly allBotanisms: string[] = [
    "OI",
    "Slander",
    "Butthead",
    "Complain about roulette",
    "Complain about mentor",
    "Complain about legend titles",
    "Get mad at post on internet",
    "AYO",
    "I'll turn you into [insert food item]",
    "I won't cry",
    "Be slowpoke",
    "Put money down on gacha game",
    "Quit when gacha game doesn't give him a character",
    "It's popular, I hate it",
    "MY NAAAAAME",
    "I like [insert weird food]",
    "I like turn-based games",
    "Explain his skill issue with some game",
    "L take",
    "Anime dubs suck",
    "Hear wrong thing",
    "I'm not naked",
    "Pronounce incorrectly",
    "Goofy laugh",
    "Voice changer suddenly turns on",
    "Boasts about game prowess",
    "I'm not an alcoholic",
    "Does something to get removed from VC",
    "Talks about food",
    "Denial of obvious things",
    "I don't like [insert game race here]",
    "Such slander!"
  ];
}
