export interface CampgroundItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
export interface CampgroundJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CampgroundItem[]
  }

export interface BookingItem {
    nameLastname: string;
    tel: string;
    campground: string;
    bookDate: string;
    email: string;
  }

export interface Benefit {
    title: string;
    description: string;
  }