import { bind, clear } from 'size-sensor';
import styles from './index.scss';

export default (Chart) => {
  return class extends React.Component {
    instance = null;  // eslint-disable-line
    container = null;

    componentWillUnmount() {
      const { container } = this;
      if (container) {
        clear(container, this.changeSizeByContainer);
      }
    }

    initInstance = (instance) => {
      if (!instance) return;

      const container = instance.get('container');

      this.instance = instance;
      this.container = container;

      if (container) {
        bind(container, this.changeSizeByContainer);
      }

      this.changeSizeByContainer();

      const { onGetG2Instance } = this.props;
      if (typeof onGetG2Instance === 'function') onGetG2Instance();
    }

    changeSizeByContainer = () => {
      const { instance, container } = this;
      if (!instance || !container) return;

      const clientHeight = container.clientHeight || 0;
      const clientWidth = container.clientWidth || 0;

      instance.changeSize(clientWidth, clientHeight);
    }

    render() {
      const {
        width, height, forceFit,  // filter these
        className,
        ...rest
      } = this.props;

      return (
        <Chart
          {...rest}
          className={[styles.wrap, className].join(' ')}
          width={0}
          height={0}
          onGetG2Instance={this.initInstance}
        />
      );
    }
  };
};
