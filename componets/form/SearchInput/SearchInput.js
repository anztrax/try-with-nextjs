import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { FiSearch } from 'react-icons/fi';
import {colors} from "../../../themes/defaultTheme";
import SearchResult from "./SearchResult";
import DummyDataService from "../../../services/DummyDataService";

const classNames = {
  searchButton : css`
     display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-top-right-radius : .25rem;;
    border-bottom-right-radius : .25rem;;
  `,
  searchInputContainer: css`
    display: inline-block;
  `
};

const isClient = () => {
  return (typeof window !== 'undefined');
};

class SearchInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen : false
    };
    this.dummyDataService = new DummyDataService();
  }

  componentWillMount(){
    if(isClient()) {
      document.addEventListener('mousedown', this.handleOnClick);
    }
  }

  componentWillUnmount(){
    if(isClient()) {
      document.removeEventListener('mousedown', this.handleOnClick);
    }
  }

  render(){
    const { isOpen, recentPersons } = this.state;
    return(
      <div className={classNames.searchInputContainer} ref={node => this.node = node}>
        <InputGroup>
          <Input placeholder="search" />
          <InputGroupAddon addonType="append" className={classNames.searchButton}>
            <FiSearch color={colors.blue1} size={20} />
          </InputGroupAddon>
        </InputGroup>
        {isOpen && (
          <SearchResult recentPersons={recentPersons} />
        )}
      </div>
    );
  }

  handleOnClick = (e) => {
    if(this.node.contains(e.target)){
      this.searchRecentPersons();
      return;
    }

    this.handleOnClickOutside();
  };

  searchRecentPersons = () => {
    this.dummyDataService.getRecentPersons(this.props.profileId).then(recentPersons => {
      this.setState({
        recentPersons,
        isOpen : true
      })
    });

  };

  handleOnClickOutside = () => {
    this.setState({
      isOpen : false
    });
    console.log('handle on click outside');
  };
}

SearchInput.propTypes = {
  profileId : PropTypes.string
};
export default SearchInput;