/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

 export class Film {
    titre?: string;
    description?: string;
    note?: number;
  
    constructor(args: Film = {}) {
      this.titre = args.titre;
      this.description = args.description;
      this.note = args.note;
    }
  }