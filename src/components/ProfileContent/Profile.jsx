/* eslint-disable */
import './Profile.scss';
import React from 'react';
// import ReactDOM from 'react-dom'
const { Component } = React;
// const { render } = ReactDOM
// import DemoPage from '../../pages/DemoPage/DemoPage';

const Profile = () => (
  <div className="Root">
    <button className="jump" onClick={()=>document.location.href = '/post'}>Post Ad </button>
    <Tabs selected={0}>
      <TabList>
        <Tab>
          <div className="ps">
            <Button className="profileButton">
              <div className="profileIcon"></div>
              Profile setting
            </Button>
          </div>
          <hr className="hr" />
        </Tab>
        {/*<Tab>*/}
        {/*  <Button>My shop</Button>*/}
        {/*  <hr className="hr"/>*/}
        {/*</Tab>*/}
        <Tab>
          <Button className="shopButton">
            <div className="shopIcon"></div>
            My shop
          </Button>
          <hr className="hr" />
        </Tab>
        <Tab>
          <Button className="messageButton">
            <div className="messageIcon"></div>
            Message</Button>
          <hr className="hr" />
        </Tab>
        {/*<Tab>*/}
        {/*  <Button>Account</Button>*/}
        {/*  <hr className="hr"/>*/}
        {/*</Tab>*/}
      </TabList>

      <TabPanel>
        <div className="profile">
          <div className="profile_title">My profile</div>
          <div className="profile_hr1">
            <hr className="hr_feature" />
          </div>
          <div className="profile_imgAndInput">
            <div className="profile_imgAndInput-img"></div>
            <div className="profile_imgAndInput-inputs">
              <p className="inputName">Username</p>
              <input className="inputFeature" />
              <p className="inputName">Phone number</p>
              <input className="inputFeature" />
              <p className="inputName">Address</p>
              <input className="inputFeature" />
              <button className="profile_save-button" type="button">
                Save
              </button>
            </div>
            <div className="profile_hr">
              <hr className="hr2_feature" />
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="shop">
          <div className="shop_title">My shop</div>
          <div className="shop_hr1">
            <hr className="hr_feature" />
          </div>
          <div className="checkbox">
            <input type="checkbox" className="check" /> Select all items delete all{' '}
          </div>
          <div className="shop_card">
            <div className="shop_header">
              <input type="checkbox" className="shop_header_checkheader" />
              <div className="shop_header_detail"> Last posted Sep 4,2021 | Order:3 | Seller:Juliana</div>
            </div>
            <div className="shop_img"></div>
            <div className="shop_intro">
              <p id="p1">Canvendish Bananas 2KG</p>
              <p id="p2">B-grade Vegetables</p>
              <p>Brisbane</p>
            </div>
            <div className="shop_price">$46.32</div>
            <div className="shop_num">
              Qty <input className="shop_num_input" defaultValue="1" />
            </div>
            <div className="edit_img" />
            <button className="edit_button">Edit</button>
            <div className="delete_img" />
            <button className="delete_button">/ Delete</button>
          </div>
        </div>
      </TabPanel>
      
      <TabPanel>
        <div className="message">
          <div className="message_title">Message</div>
          <div className="message_box"> </div>
        </div>
      </TabPanel>
    </Tabs>
  </div>
);

/*
 * Tabs is the stateful component.
 * You can pass an index in the `selected` prop
 * to specify which tab is active by default.
 *
 * This component handles the entire tabs system.
 * It transforms its own children (if they are Tab or TabPanel) to pass the
 * required props in order to run automatically the system.
 */

class Tabs extends Component {
  state = { selected: this.props.selected };

  setSelected(selected) {
    if (selected !== 0) {
      document.getElementById('nothing').style.display = 'none';
      document.getElementById('nothing2').style.display = 'none';
      document.getElementById('passwordTitle').style.display = 'none';
      document.getElementById('emailTitle').style.display = 'none';
      document.getElementById('password_profile_save-button').style.visibility = 'hidden';
      document.getElementById('email-button').style.display = 'none';
    } else {
      document.getElementById('passwordTitle').style.display = '';
      document.getElementById('nothing').style.display = '';
      document.getElementById('nothing2').style.display = '';
      document.getElementById('password_profile_save-button').style.visibility = 'visible';
      document.getElementById('email-button').style.display = '';
      document.getElementById('emailTitle').style.display = '';
    }
    if (selected !== this.state.selected) {
      this.setState({ selected });
    }
  }

  handleClick(tab) {
    return () => this.setSelected(tab);
  }

  renderTabList(child) {
    let tab = 0;

    return React.cloneElement(child, {
      children: React.Children.map(child.props.children, (childTab) => {
        if (childTab.type.name === 'Tab') {
          const _isActive = tab === this.state.selected;
          const _onClick = this.handleClick(tab);
          tab++;
          return React.cloneElement(childTab, { _isActive, _onClick });
        }

        return childTab;
      }),
    });
  }

  renderChildren(children) {
    let panel = 0;

    return React.Children.map(children, (child) => {
      if (child.type.name === 'TabList') {
        return this.renderTabList(child);
      }

      if (child.type.name === 'TabPanel') {
        const _isActive = panel === this.state.selected;

        panel++;

        return React.cloneElement(child, { _isActive });
      }

      return child;
    });
  }

  render() {
    return <div className="Tabs">{this.renderChildren(this.props.children)}</div>;
  }
}

const TabList = ({ children }) => <ul className="TabList">{children}</ul>;

const Tab = ({ _onClick, _isActive, children }) => (
  <li className={`Tab  ${_isActive ? 'is-active' : ''}`} onClick={_onClick}>
    {children}
  </li>
);

const TabPanel = ({ _isActive, children }) => (
  <div className={`TabPanel  ${_isActive ? 'is-active' : ''}`}>{children}</div>
);

/* --- */

const Button = ({ children }) => <button className="Button">{children}</button>;

// render(<Profile />, document.querySelector("#Profile"))
export default Profile;
