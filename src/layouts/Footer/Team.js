import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import profilImage from "../../assets/images/pp.jpg"

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

export default class Team extends Component {

    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <>
                <List
                    dataSource={[
                        {
                            name: 'Muhammet Can Özyiğit',
                        },

                    ]}
                    bordered
                    renderItem={item => (
                        <List.Item
                            key={item.id}
                            actions={[
                                <a onClick={this.showDrawer} key={`a-${item.id}`}>
                                   Görüntüle
                                </a>,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={profilImage} />
                                }
                                title={<a>{item.name}</a>}
                                description="Software Developer"
                            />
                        </List.Item>
                    )}
                />
                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                        MUHAMMET CAN ÖZYİĞİT
                    </p>
                    <p className="site-description-item-profile-p">Software Developer</p>
                    <Row>


                    </Row>
                    <Row>
                        <Col span={8}>
                            <DescriptionItem title="Şehir" content="Sivas" />
                        </Col>
                        <Col span={8}>
                            <DescriptionItem title="Ülke" content="Türkiye" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <DescriptionItem title="Doğum Tarihi" content="07/11/2000" />
                        </Col>

                    </Row>

                    <Divider />
                    <p className="site-description-item-profile-p">İletişim</p>

                    <Row>
                        <Col span={9}>
                            <DescriptionItem title="E-Posta" content="muhammetcanozyigit@gmail.com" />
                        </Col>
                        <Col span={4}>
                            <DescriptionItem title="Linkedin" content={<a href="https://www.linkedin.com/feed/">Linkedin Link</a>} />
                        </Col>
                        <Col span={4}>
                            <DescriptionItem title="Github" content={<a href="https://github.com/canozyigiit">Github Link</a>} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Yetenekler"
                                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                            />
                        </Col>
                    </Row>
                    <Divider />

                </Drawer>
            </>
        )
    }
}
