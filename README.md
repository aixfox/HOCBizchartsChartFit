
Initialize and resize Bizcharts Chart to parent element with `clientWith` and `clientHeight`, just concern about styles of wrapper element.

Inspired by [echarts-for-react](https://github.com/hustcc/echarts-for-react)


## Usage

```javascript
import { Chart } from 'bizcharts';
import HOCBizchartsChartFit from 'hoc-bizcharts-chart-fit';

const ChartFit = HOCBizchartsChartFit(Chart);

const data = [];

export default (props) => {
  return (
    <div
      // element which ChartFit fits
    >
      <ChartFit data={data}>
      </ChartFit>
    </div>
  );
}
```


## Dependencies and options

- react environment
- size-sensor
- sass-loader, and css loader with option `modules: true` (or fit it by yourself)
