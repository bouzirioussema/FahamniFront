export class Course {
  id: number;
  title: string;
  description: string;
  category: string;
  durationInHours: number;
  level: string;
  imageUrl: string;
  published: boolean;
  teacherId: string;
  videoUrl?: string;
  videos?: any[];

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    durationInHours: number,
    level: string,
    imageUrl: string,
    published: boolean,
    teacherId: string,
    videoUrl?: string,
    videos?: any[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.durationInHours = durationInHours;
    this.level = level;
    this.imageUrl = imageUrl;
    this.published = published;
    this.teacherId = teacherId;
    this.videoUrl = videoUrl;
    this.videos = videos;
  }
}
