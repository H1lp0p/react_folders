class FileModel {

    constructor(name = "None", id = null, path = "") {
        this.name = name;
        this.id = id;
        this.path = path;
    }

    delete(){}

    validateName(newName){
        return (typeof newName === "string" && newName !== this.name && newName.length > 0)
    }

    setName(newName){
        if (this.validateName(newName)){
            this.name = newName;
        }
    }
}