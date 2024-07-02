import axios from 'axios';
import ReminderModel from '../models/ReminderModel';

class ReminderService {
    private http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    });

    public async getTodos(): Promise<ReminderModel[]> {
        const response = await this.http.get<ReminderModel[]>('todos');
        return response.data;
    }

    public async addReminder(title: string): Promise<ReminderModel> {
        const response = await this.http.post<ReminderModel>('todos', { title });
        return response.data;
    }

    public async removeReminder(id: number): Promise<void> {
        await this.http.delete(`todos/${id}`);
    }
}

const reminderService = new ReminderService();

export default reminderService;