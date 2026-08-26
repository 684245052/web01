interface StorageService {
    save(data: string): void;
    load(): string;
}
abstract class BaseStorage {
    protected data: string = "";
}
class CloudStorage extends BaseStorage implements StorageService {
    save(data: string): void {
        this.data = data;
        console.log(`บันทึกข้อมูลลง Cloud: ${this.data}`);
    }
    load(): string {
        return this.data;
    }
}
class LocalStorage extends BaseStorage implements StorageService {
    save(data: string): void {
        this.data = data;
        console.log(`บันทึกข้อมูลลงเครื่อง: ${this.data}`);

    }
    load(): string {
        return this.data;
    }
}
const storage1 = new CloudStorage();
const storage2 = new LocalStorage();
storage1.save("Hello Cloud");
console.log(storage1.load());
storage2.save("Hello Local");
console.log(storage2.load());