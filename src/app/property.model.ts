export class Property{
    private category: string;
    private title: string;
    private rooms: number;
    private bathroom: number;
    private description: string;
    private location: string;
    private toilet: number;

    constructor(toilet: number, category: string, title: string, rooms: number, bath: number, description: string, location: string){
        this.category = category;
        this.title = title;
        this.rooms = rooms;
        this.bathroom = bath;
        this.description = description;
        this.location = location;
        this.toilet = toilet;
    }

    getToilet(): number{
        return this.toilet;
    }

    getDescription(): string{
        return this.description;
    }

    getCategory(): string{
        return this.category;
    }

    getTitle(): string{
        return this.title;
    }

    getRooms(): number{
        return this.rooms;
    }

    getBathroom(): number{
        return this.bathroom;
    }

    getLocation(): string{
        return this.location;
    }
}