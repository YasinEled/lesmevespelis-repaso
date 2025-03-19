export class Perfil {
    uid!: string // identificador de l'usuari
    email!: string
    nom!: string
    nomFitxerAvatar!: string // nom del fitxer jpg o png amb l'avatar
    urlAvatar!: string // url del fitxer que allotjarem en l'Storage de Firebase
    fitxer: File // el fitxer
    // hem d'afegir un constructor que té la funció d'assignar el fitxer f al camp fitxer
    constructor(f: File) {
    this.fitxer = f;
    }
    }