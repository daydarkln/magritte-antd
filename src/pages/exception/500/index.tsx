import { DownOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  ConfigProvider,
  DatePicker,
  Drawer,
  Dropdown,
  Flex,
  Form,
  Input,
  Layout,
  List,
  Menu,
  Radio,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import { useEffect, useState } from 'react';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const SearchIcon = () => <img src={'/icons/search.svg'} />;

type Employee = {
  fullName: string;
  image: string;
  position: string;
  department: string;
  liked: boolean;
  isOnline: boolean;
  contacts: {
    email: string;
    telegram: string;
    messenger: string;
    phone: string;
  };
};

const ColleaguesPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [sorting, setSorting] = useState<string>('experience');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    setEmployees([
      {
        fullName: 'Андрей Архипов',
        image: '/card/person.png',
        position: 'Начальник отдела',
        department: 'Отдел административной поддержки маркетинга',
        liked: true,
        isOnline: true,
        contacts: {
          email: 'arhipov@mail.ru',
          telegram: '@arhipov',
          messenger: 'Mattermost',
          phone: '+7 495 321-23-23',
        },
      },
      {
        fullName: 'Григорий Булатов',
        image: '/card/person-1.png',
        position: 'Руководитель подразделения',
        department: 'Отдел поддержки маркетинга и административных процессов',
        liked: false,
        isOnline: true,
        contacts: {
          email: 'arhipov@mail.ru',
          telegram: '@arhipov',
          messenger: 'Mattermost',
          phone: '+7 495 321-23-23',
        },
      },
      {
        fullName: 'Александр Архипов',
        image: '/card/person-2.png',
        position: 'Директор отдела',
        department: 'Отдел поддержки маркетинга и администрирования',
        liked: false,
        isOnline: false,
        contacts: {
          email: 'arhipov@mail.ru',
          telegram: '@arhipov',
          messenger: 'Mattermost',
          phone: '+7 495 321-23-23',
        },
      },
    ]);
  }, []);

  const menu = (
    <Menu theme="light">
      <Menu.Item key="profile">Профиль</Menu.Item>
      <Menu.Item key="settings">Настройки</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">Выход</Menu.Item>
    </Menu>
  );

  const filtersModal = (
    <Drawer
      title="Фильтры"
      open={showFilters}
      onClose={() => setShowFilters(false)}
      footer={
        <Row justify="space-between">
          <Button variant="filled" color="red">
            Сбросить все
          </Button>
          <Space>
            <Button variant="filled" color="blue" onClick={() => setShowFilters(false)}>
              Отмена
            </Button>
            <Button color="blue" variant="solid" type="primary">
              Применить
            </Button>
          </Space>
        </Row>
      }
    >
      <Form layout="vertical">
        <Form.Item>
          <Select placeholder="Город места работы" />
        </Form.Item>
        <Form.Item>
          <Select placeholder="Должность" />
        </Form.Item>
        <Form.Item>
          <Select placeholder="Отдел" />
        </Form.Item>
        <Row gutter={16} align={'bottom'}>
          <Col span={11}>
            <Form.Item label="День рождения">
              <DatePicker style={{ width: '100%' }} placeholder="С" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>-</Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              <DatePicker style={{ width: '100%' }} placeholder="До" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Select placeholder="Непосредственный руководитель" />
        </Form.Item>
        <Form.Item>
          <Select placeholder="Вышестоящий руководитель" />
        </Form.Item>
      </Form>
    </Drawer>
  );

  return (
    <ConfigProvider
      layout={{
        style: {
          background: 'none',
        },
      }}
      drawer={{
        styles: {
          wrapper: {
            margin: 12,
            width: 480,
          },
          content: {
            borderRadius: 24,
          },
          header: {
            padding: 24,
          },
          footer: {
            padding: 24,
          },
        },
      }}
      button={{
        style: {
          boxShadow: 'none',
        },
      }}
      theme={{
        token: {
          fontFamily: 'Inter',
          fontSize: 16,
          fontSizeSM: 14,
          fontSizeLG: 22,
          fontSizeHeading1: 38,
          fontSizeHeading2: 28,
          fontSizeHeading3: 24,
          fontSizeHeading4: 22,
          fontSizeHeading5: 16,
          borderRadius: 12,
          colorPrimary: '#000',
          controlHeight: 48,
          controlHeightSM: 40,
          colorTextPlaceholder: '#AABBCA',
          colorBorderSecondary: '#AABBCA',
          controlPaddingHorizontal: 12,
          colorSplit: '#DCE3EB',
        },
        components: {
          Card: {
            boxShadow: 'none',
            borderRadius: 24,
            colorBorderSecondary: '#DCE3EB',
          },
          Avatar: {
            borderRadius: 16,
            groupBorderColor: 'rgba(0,0,0,0.08)',
          },
          Badge: {},
          Radio: {
            fontWeightStrong: 600,
            buttonBg: '#F1F4F9',
            buttonColor: '#6A7885',
            buttonCheckedBg: '#000',
            buttonSolidCheckedColor: '#fff',
          },
          Button: {
            fontWeight: 600,
            paddingBlock: 10,
            defaultBorderColor: 'transparent',
            defaultHoverBorderColor: 'transparent',
            defaultActiveBorderColor: 'transparent',
            defaultBg: '#F1F4F9',
            defaultHoverBg: '#AABBCA',
          },
          Typography: {
            titleMarginBottom: 0,
            lineHeightHeading2: 1.466667,
          },
          Menu: {
            itemSelectedBg: 'none',
            itemHeight: 44,
          },
          Form: {
            margin: 8,
          },
          Input: {
            paddingBlock: 10,
            hoverBorderColor: '#AABBCA',
          },
          Select: {
            paddingContentHorizontal: 12,
            showArrowPaddingInlineEnd: 27,
            optionSelectedColor: 'white',
            paddingSM: 17,
          },
        },
      }}
    >
      <Layout>
        <Header className="header">
          <Flex justify="space-between" align={'center'}>
            <Space size="large">
              <img src="/logo.svg" alt="" />
              <Menu className="top-nav" theme="light" mode="horizontal" inlineCollapsed={false}>
                <Menu.Item key="news">Новости</Menu.Item>
                <Menu.Item key="colleagues">Коллеги</Menu.Item>
                <Menu.Item key="companies">Компании</Menu.Item>
                <Menu.Item key="offices">Офисы</Menu.Item>
                <Menu.Item key="vacancies">Вакансии</Menu.Item>
              </Menu>
            </Space>

            <Space size={12}>
              <Input
                className="search-input"
                placeholder="Как мне уйти в отпуск?"
                prefix={<SearchIcon />}
                prefixCls="search-prefix"
              />
              <Button type="text">
                <Badge dot>
                  <img src="/icons/notification.svg" />
                </Badge>
              </Button>

              <Dropdown overlay={menu} trigger={['click']}>
                <Button type="text" style={{ display: 'flex', gap: 10 }}>
                  <Avatar.Group>
                    <Avatar shape="square" size={'default'} icon={<img src="/avatar.png" />} />
                  </Avatar.Group>

                  <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
          </Flex>
        </Header>

        <Layout>
          <Content style={{ padding: '40px 48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '92px auto', gap: 28 }}>
              <Menu
                className="main-menu"
                overflowedIndicatorPopupClassName="menu-popup"
                style={{
                  position: 'sticky',
                  top: 24,
                  height: 754,
                  paddingTop: 17,
                  borderRadius: 20,
                  background: '#F4F6FB',
                  border: 'none',
                }}
                mode="inline"
                defaultSelectedKeys={['1']}
                inlineCollapsed
              >
                {[...Array(12)].map((_, i) => (
                  <Menu.Item
                    key={i + 1}
                    icon={<img src={`/icons/menu/menu-${i + 1}.svg`} />}
                  ></Menu.Item>
                ))}
              </Menu>
              <Space direction={'vertical'} size={24}>
                <Title level={2}>Коллеги</Title>

                <Radio.Group
                  style={{ display: 'flex', gap: 12 }}
                  className="radio-group"
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  value={selectedFilter}
                  size="small"
                  buttonStyle="solid"
                >
                  <Radio.Button value="all">
                    <Space size={14}>
                      Список коллег <Text className="text-dimmed">121 024</Text>
                    </Space>
                  </Radio.Button>
                  <Radio.Button value="favorites">
                    <Space size={14}>
                      Избранные коллеги <Text className="text-dimmed">15</Text>
                    </Space>
                  </Radio.Button>
                  <Radio.Button value="structure">Структура компании</Radio.Button>
                  <Radio.Button value="guide">Гайд по коллегам</Radio.Button>
                </Radio.Group>

                <Form layout="inline">
                  <Form.Item>
                    <Input
                      style={{ minWidth: 531 }}
                      className="search-input"
                      prefixCls="search-prefix"
                      prefix={<SearchIcon />}
                      placeholder="Поиск по фамилии, имени, департаменту и номеру телефона..."
                    />
                  </Form.Item>
                  <Form.Item>
                    <Select placeholder="Город места работы" />
                  </Form.Item>
                  <Form.Item>
                    <Select placeholder="Должность" />
                  </Form.Item>
                  <Form.Item>
                    <Select placeholder="Отдел" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      variant={'filled'}
                      icon={<img src="/icons/settings.svg" />}
                      iconPosition="end"
                      onClick={() => setShowFilters(true)}
                    >
                      Все фильтры
                    </Button>
                  </Form.Item>
                </Form>

                <Select value={sorting} variant="borderless" onChange={setSorting}>
                  <Option value="experience">По стажу</Option>
                  <Option value="date">По дате</Option>
                </Select>

                <List
                  grid={{ gutter: 12, column: 1 }}
                  style={{ maxWidth: 808, marginTop: -10 }}
                  dataSource={employees}
                  renderItem={(employee) => (
                    <List.Item>
                      <Card variant="outlined">
                        <Row align={'top'} gutter={24}>
                          <Col>
                            <Badge
                              styles={{
                                indicator: {
                                  width: 12,
                                  height: 12,
                                  boxShadow: '0 0 0 3px #ffffff',
                                  top: 'auto',
                                  bottom: 6,
                                  right: 0,
                                  transform: 'none',
                                  background: '#0EA658',
                                },
                              }}
                              status={employee.isOnline ? 'success' : 'default'}
                              dot
                            >
                              <Avatar.Group>
                                <Avatar
                                  style={{ borderRadius: '24px' }}
                                  shape="square"
                                  size={96}
                                  src={employee.image}
                                />
                              </Avatar.Group>
                            </Badge>
                          </Col>
                          <Flex vertical gap={4} style={{ flexGrow: 1 }}>
                            <Title level={4}>{employee.fullName}</Title>
                            <Text style={{ fontSize: 16 }}>{employee.position}</Text>
                            <Text type="secondary">{employee.department}</Text>
                          </Flex>
                          <Col>
                            {employee.liked ? (
                              <HeartFilled
                                style={{ color: '#FF3C77', fontSize: 24 }}
                                onClick={() => toggleLike(employee)}
                              />
                            ) : (
                              <HeartOutlined
                                style={{ fontSize: 24, color: '#AABBCA' }}
                                onClick={() => toggleLike(employee)}
                              />
                            )}
                          </Col>
                        </Row>

                        <Row style={{ marginTop: 7 }} gutter={24}>
                          <Col>
                            <Space>
                              <img src="/icons/contacts/mail.svg" />
                              <Text className="contact-text">{employee.contacts.email}</Text>
                            </Space>
                          </Col>
                          <Col>
                            <Space>
                              <img src="/icons/contacts/tg.svg" />
                              <Text className="contact-text">{employee.contacts.telegram}</Text>
                            </Space>
                          </Col>
                          <Col>
                            <Space>
                              <img src="/icons/contacts/message.svg" />
                              <Text className="contact-text">{employee.contacts.messenger}</Text>
                            </Space>
                          </Col>
                          <Col>
                            <Space>
                              <img src="/icons/contacts/phone.svg" />
                              <Text className="contact-text">{employee.contacts.phone}</Text>
                            </Space>
                          </Col>
                        </Row>
                      </Card>
                    </List.Item>
                  )}
                />

                {filtersModal}
              </Space>
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default ColleaguesPage;
