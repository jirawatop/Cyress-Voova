import { Jobs } from "./function-test";

before(() => {
    cy.viewport(1920, 1080);  
});
describe('Navigation to website', () => {
    it('should open the website', () => {
        Jobs.openWebsite(Jobs.urlWebsite); // เรียกใช้โดยตรง
    });
});
