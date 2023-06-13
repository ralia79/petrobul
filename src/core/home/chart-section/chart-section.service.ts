import axios from 'axios';

export default class ChartSectionService {
    public getChartData(dataMode: string): Promise<any> {
        const data = "testData" ;
        return new Promise<any>((resolve, reject) => {
            axios
                .post(`/api/chartData`, {data})
                .then((res: { data: any; }) => {
                    resolve(res);
                })
                .catch((err: { data: any; }) => {
                    reject(err);
                });

        });
    }
}
