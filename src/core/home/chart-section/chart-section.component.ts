import Component from "vue-class-component";
import {Inject, Vue, Watch} from "vue-property-decorator";
import {Line as LineChartGenerator} from 'vue-chartjs';
import CartSectionService from '@/core/home/chart-section/chart-section.service';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
} from 'chart.js'
import ChartSectionService from "@/core/home/chart-section/chart-section.service";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)

@Component({
    components: {
        LineChartGenerator
    }
})
export default class ChartSectionComponent extends Vue {

    @Inject('chartSectionService')
    private chartSectionService!: () => ChartSectionService;


    private chartId = 'line-chart';
    private datasetIdKey = 'label'
    private tabModel = null;
    private dataMode = 'data1month';
    private chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 39, 10, 40, 39, 80, 40]
            }
        ]
    };
    private chartOptions = {
        responsive: true,
        maintainAspectRatio: false
    };

    @Watch('tabModel')
    async refreshPriceChart(newValue: number) {
        switch (newValue) {
            case 0:
                await this.changeChartData('data1month');
                break;
            case 1:
                await this.changeChartData('data3months');
                break;
            case 2:
                await this.changeChartData('data1year');
                break;
            case 3:
                await this.changeChartData('data3years');
                break;
        }
    }


    private async changeChartData(strMode: string) {
        this.dataMode = strMode;

        const res = await this.chartSectionService().getChartData(strMode);
        console.log(res)
    }
}