const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const htmlPath = path.resolve(__dirname, "../student-code/index.html");
const html = fs.readFileSync(htmlPath, "utf8");
const dom = new JSDOM(html);
const document = dom.window.document;

describe("Unit 02 - Lesson 4: HTML Lists - Classwork", () => {
  test("includes an unordered list in 'My Hobbies' section", () => {
    const hobbiesSection = [...document.querySelectorAll("h3")].find(h =>
      h.textContent.toLowerCase().includes("my hobbies")
    );
    expect(hobbiesSection).toBeTruthy();

    const ul = hobbiesSection.nextElementSibling;
    expect(ul && ul.tagName).toBe("UL");

    const items = ul.querySelectorAll("li");
    expect(items.length).toBeGreaterThanOrEqual(3);
  });

  test("includes an ordered list in 'My Daily Routine' section", () => {
    const routineSection = [...document.querySelectorAll("h3")].find(h =>
      h.textContent.toLowerCase().includes("my daily routine")
    );
    expect(routineSection).toBeTruthy();

    const ol = routineSection.nextElementSibling;
    expect(ol && ol.tagName).toBe("OL");

    const items = ol.querySelectorAll("li");
    expect(items.length).toBeGreaterThanOrEqual(3);
  });

  test("includes unordered list in 'Related Articles' inside <aside>", () => {
    const aside = document.querySelector("aside");
    expect(aside).toBeTruthy();

    const relatedHeading = [...aside.querySelectorAll("h3")].find(h =>
      h.textContent.toLowerCase().includes("related articles")
    );
    expect(relatedHeading).toBeTruthy();

    const ul = relatedHeading.nextElementSibling;
    expect(ul && ul.tagName).toBe("UL");

    const items = ul.querySelectorAll("li");
    expect(items.length).toBeGreaterThanOrEqual(2);
  });

  test("uses <li> tags properly", () => {
    const allLis = document.querySelectorAll("li");
    expect(allLis.length).toBeGreaterThanOrEqual(8); // total across all lists
  });
});
