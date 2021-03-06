interface IResLogin {
  access: string;
}

interface IResGetListAllTutor {
  result: Array<IResTutor>;
}
interface IResTutor {
  _id: string;
  name: string;
  email: string;
  phone: number;
  avatar: string;
  address: string;
  gender: number;
  degree: Array<IResDegree>;
  DOB: IResDate;
  major: Array<IResMajor>;
  course: Array<IResCourse>;
  accent: string;
  quote: string;
  education: Array<IResEducation>;
  exp: string;
  rating: number;
  personality: string;
  noLike: number;
  noOngoingCourse: number;
  available: Array<IResAvailable>;
}

interface IResDegree {
  item: string;
}
interface IResMajor {
  item: string;
}
interface IResCourse {
  id: string;
}
interface IResEducation {
  item: string;
}
interface IResDate {
  day: number;
  month: number;
  year: number;
}
interface IResAvailable {
  day: string;
  time: Array<IResAvailableTime>;
}
interface IResAvailableTime {
  start: string;
  time: string;
}

interface IResOneTutor {
  _id?: string;
  name?: string;
  email?: string;
  phone?: number;
  avatar?: string;
  address?: string;
  gender?: number;
  degree?: Array<IResDegree>;
  DOB?: string;
  major?: Array<IResMajor>;
  course?: Array<IResCourse>;
  accent?: string;
  quote?: string;
  education?: Array<IResEducation>;
  exp?: string;
  rating?: number;
  personality?: string;
  noLike?: number;
  noOngoingCourse?: number;
  available?: Array<IResAvailable>;
}

interface IResGetOneTutor {
  tutor: IResOneTutor;
}

interface IResGetCourse {
  _id?: string;
  name?: string;
  duration?: string;
  subject?: any;
  syllabus?: any;
  noLike?: number;
  rating?: number;
  tutorID?: Array<{ _id?: string }>;
  price?: number;
  avatar?: string;
  overview?: string;
  level?: string;
  syllabus?: Array<{ item?: string }>;
  subject?: Array<{ item?: string }>;
}
interface IResGetOneCourse {
  course: IResGetCourse;
}
interface IResGetListAllCourse {
  result: Array<IResGetCourse>;
}

interface IResVoucher {
  _id?: string;
  code?: string;
  from?: Date;
  to?: Date;
  discount?: number;
  type?: boolean;
}

interface IResPayment {
  courseID?: string;
  userID?: string;
  email?: string;
  status?: number;
  total: number;
  tutor: Array<IResOneTutor>;
  course: IResGetCourse;
  user: { name?: string; avatar?: string };
}
interface IResListPayment {
  result: Array<IResPayment>;
}
