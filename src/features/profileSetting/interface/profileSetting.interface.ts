export interface ClientSetting {
 profileName: string;
 client: string;
 website: string;
 frequency: string;
 baselineDate: string;
 primaryColor: string;
 companyLogo: any;
 ProfileDescription: string;
 contactPerson: string;
 email: string;
 address: string;
 siteType: string;
 frequencyDropDown: Array<FrequencyDropDown>;
 siteTypeDropDown: Array<SiteTypeDropDown>;
};


interface FrequencyDropDown {
 text: string,
 value : number
};

interface SiteTypeDropDown {
    text: string,
    value : string
   };

  
   
   export class ClientSettingModel {
    
    // client: string ;
    // website: string ;
    // frequency: string ;
    // baselineDate: string ;
    // primaryColor: string ;
    // companyLogo: any;
    // ProfileDescription: string ;
    // contactPerson: string ;
    // email: string ;
    // address: string ;
    // siteType: string ;
    // frequencyDropDown: Array<FrequencyDropDown>;
    // siteTypeDropDown: Array<SiteTypeDropDown>;

    constructor(
        public profileName :string ="",
        public website: string ="",
        public frequency: string ="",
        public baselineDate: string ="",
        public primaryColor: string="",
        public companyLogo: any,
        public ProfileDescription: string="",
        public contactPerson: string ="",
        public email: string ="",
        public address: string ="",
        public siteType: string ="",
        public frequencyDropDown: Array<FrequencyDropDown> =[],
        public siteTypeDropDown: Array<SiteTypeDropDown> =[]
        ){};
   }