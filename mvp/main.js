class Model{

    constructor(){
        this.senderName = "";
        this.recieverName = "";
        this.emailTitle = "";
    }

    setSenderName(senderName){
        this.senderName = senderName;
    }

    getSenderName(){
        return this.senderName;
    }

    setRecieverName(recieverName){
        this.recieverName = recieverName;
    }

    getRecieverName(){
        return this.recieverName;
    }

    setEmailTitle(emailTitle){
        this.emailTitle = emailTitle;
    }

    getEmailTitle(){
        return this.emailTitle;
    }

}

class View{
    constructor(){
        this.presenter = null;
    }

    registerWith(presenter){
        this.presenter = presenter;
    }

    sendEmail(to,fromWhom, emailTitle){
        this.presenter.sendEmail(to,fromWhom, emailTitle)
    }

    displayEmailInfo(senderName,recieverName, emailTitle){
        console.log("Email From: "  + senderName + " To: " + recieverName + " Title: " + emailTitle);
    }

}

class Presenter{
    constructor(view){
        this.view = view;
        this.model = null;
    }

    setModel(model){
        this.model= model;
    }

    getView(){
        return this.view;
    }

    sendEmail(to,fromWhom, emailTitle){
        this.model.setEmailTitle(emailTitle)
        this.model.setSenderName(fromWhom)
        this.model.setRecieverName(to)
        this.view.displayEmailInfo(this.model.getSenderName(), this.model.getRecieverName(),this.model.getEmailTitle())
    }
}

var model   = new Model()
var view = new View()
var presenter = new Presenter(view)
presenter.setModel(model)
view.registerWith(presenter)
presenter.getView().sendEmail("Rachel", "Joey", "Rent Discussion")
presenter.getView().sendEmail("Monica", "Phoebe", "Smelly Cat Draft")