
interface IBase {
      inputStr: string;
      outputStr: string;
      encode(input: string): void;
      decoding(): void;
}

export class BaseSixtyFour implements IBase {

      inputStr: string = "santosh";
      outputStr: string;

      BaseSixtyFourClass() {

      }
      encode(input: string): void {

            this.outputStr = btoa(this.inputStr)

      }
      decoding(): void {

            atob(this.outputStr);

      }

}