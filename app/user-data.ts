export interface UserData {
    user: {
      rid :number;
      firstName: string;
      lastName: string;
      address: string;
      noOfGuest: number;
      gender: string;
      dateofFunction: string;
      mobileNum: string;
    };
    personal: {
      rid :number;
      photograph: File|null; // Assuming base64 encoded image
      bloodGroup: string;
      age: number;
    };
    family: {
      rid :number;
      familyStatus: string;
      familyType: string;
      fatherName: string;
    };
    education: {
      rid :number;
      educationLevel: string;
      educationFiled: string;
    };
    registration :{
    userName: string;
    password: string;
    phoneno: number;
    email: string;
    }
  }
  