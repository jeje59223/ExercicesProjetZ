import { toWords } from "./index";

test("toWords : should split to words separated with a space", () => {
    expect.assertions(1);

    const result: string[] = toWords("two words");

    expect(result).toEqual(["two", "words"]);
});

test("toWords: sometimes it does not work", () => {
    expect.assertions(1);

    const result = toWords("Does it-works !");

    expect(result).toEqual(["Does", "it", "works"])
});

test("toWords: sometimes it does not work", () => {
    expect.assertions(1);

    const result = toWords("Does it works ?");

    expect(result).toEqual(["Does", "it", "works"])
});