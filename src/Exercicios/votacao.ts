interface OptionsVote {
  optionName: string;
  qtdVotes: number;
}

export class Votation {
  private _votationOptions: OptionsVote[] = [];
  constructor(public VotationTheme: string){}

  addVotationOption(votationOption: OptionsVote): void{
    this._votationOptions.push(votationOption);
  }

  vote(optionIndex: number): void{
    if(!this._votationOptions[optionIndex]) return;
    this._votationOptions[optionIndex].qtdVotes++;
  }

  get votationOptions(): OptionsVote[]{
    return this._votationOptions;
  }
}

export class VotationApp{
  private votations: Votation[] = [];

  addVotation(votation: Votation): void{
    this.votations.push(votation);
  }

  showVotes():void {
    for(const votation of this.votations){
      console.log(votation.VotationTheme);
      for(const votationOption of votation.votationOptions){
        console.log(votationOption.optionName, votationOption.qtdVotes);
      }
    }
  }
}

const votation1 = new Votation('Qual sua linguagem favorita?');
votation1.addVotationOption({optionName: 'Javascript', qtdVotes: 0});
votation1.addVotationOption({optionName: 'Java', qtdVotes: 0});
votation1.addVotationOption({optionName: 'Python', qtdVotes: 0});
votation1.vote(1);
votation1.vote(0);
votation1.vote(2);
votation1.vote(1);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.showVotes();


const votation2 = new Votation('Qual sua cor favorita?');
votation2.addVotationOption({optionName: 'Vermelho', qtdVotes:0});
votation2.addVotationOption({optionName: 'Azul', qtdVotes:0});
votation2.addVotationOption({optionName: 'Rosa', qtdVotes:0});
votation2.vote(1);
votation2.vote(0);
votation2.vote(2);
votation2.vote(1);

const votationApp2 = new VotationApp();
votationApp2.addVotation(votation2);
votationApp2.showVotes();
