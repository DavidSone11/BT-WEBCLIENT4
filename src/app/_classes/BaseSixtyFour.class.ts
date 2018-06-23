
interface IBase {
      keyStr: string;
      encode(input: string): string;
      decoding(): string;
}

export class BaseSixtyFour implements IBase {

      keyStr: string = "santosh";

      BaseSixtyFourClass() {

      }
      encode(input: string): string {
            throw new Error("Method not implemented.");
            //console.log(btoa(this.keyStr));
            return "";
      }
      decoding(): string {
            throw new Error("Method not implemented.");
            //console.log(atob("eW91ciBlbmNvZGluZyB0ZXh0"));
            return "";
      }

}