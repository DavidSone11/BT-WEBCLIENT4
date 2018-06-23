
interface IBase {

      outputStr: string;
      encode(name: string): void;
      decoding(): void;
}

export class BaseSixtyFour implements IBase {


      outputStr: string;

      BaseSixtyFourClass() {

      }
      encode(name: string): void {
            console.log(btoa(name));

      }
      decoding(): void {

            atob(this.outputStr);

      }

}