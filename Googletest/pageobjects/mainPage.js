
class homePage {

    get searchField(){
        return $("//*[@class='gLFyf gsfi']");
    }

    get searchButton(){
        return $(".gNO89b"); 
    }

    async search(input){
        await this.searchField.click();
        await this.searchField.setValue(input);
        await browser.pause(1000);
        await this.searchButton.click();
        await browser.pause(1000);
        
    }
}

export default new homePage();

