import { bankv1 } from "./bankv1";

export class bankv2 extends bankv1 {
    override withdraw(): void {
        console.log("From V2");
    }
}