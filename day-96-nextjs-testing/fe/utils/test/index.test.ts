import { cutTextToLength,slugify,extractArticleIdFromSlug,composeArticleSlug } from "../index";


const str = "The quick brown fox jumps over the lazy dog.";


describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20))
           .toBe("The quick brown fox ...");
  });


  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

const text = "Hello World!"
const crazText = '45 adb $$ a 984 hello world'
console.log(slugify(text))
describe("slugify",() => {
    it("should cut symbols", () => {
        expect(slugify(text))
        .toBe("hello-world")
    })
    
    it("it should convert this ", ()=> {
        expect(slugify(crazText)).toBe('45-adb-a-984-hello-world')
    })
})

const url = 'Hello-World-up!!!'

describe("extractArticleIdFromSlug" ,() =>{
    it("medkue",() => {
        expect(extractArticleIdFromSlug(url))
        .toBe("up!!!")
    })


})
const car = 1
const cars = "Hello world"
describe ("composeArticleSlug",()=>{
    it("medkue",()=>{
        expect(composeArticleSlug(car,cars))
        .toBe("hello-world-1")
    })
})