import React, {Component} from 'react';
import ItemDetails from '../item-details';

const detailsHoc = () => {
  return class extends Component {
    state = {
      item: null,
      loading: true,
      image: null
    }

    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate(prevPros) {
      if (this.props.itemId !== prevPros.itemId ||
        this.props.getData !== prevPros.getData ||
        this.props.getImageURL !== prevPros.getImageURL) {
        this.updateItem();
      }
    }

    updateItem () {
      const { itemId, getData, getImageURL } = this.props;
      if( !itemId ) {
        return;
      }

      this.setState({loading:true});

      getData(itemId)
        .then((item) => {
          this.setState({
            item,
            loading: false,
            image: getImageURL(item)
          });
        });
    }
    render() {
      const {item, image} = this.state
      return <ItemDetails {...this.props} item={item} image={image}/>
    }
  }
}

export default detailsHoc();