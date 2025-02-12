import { DownOutlined } from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Button,
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
import { EmployeeCard } from './components/EmployeeCard';
import { useStyles } from './styles';
import { providerConfig } from './themeConfig';

const { Header, Content } = Layout;
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
  const { styles } = useStyles();

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
    <ConfigProvider {...providerConfig}>
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
                <Flex gap={10}>
                  <Avatar.Group>
                    <Avatar shape="square" size={'default'} icon={<img src="/avatar.png" />} />
                  </Avatar.Group>

                  <DownOutlined />
                </Flex>
              </Dropdown>
            </Space>
          </Flex>
        </Header>

        <Layout>
          <Content style={{ padding: '40px 48px' }}>
            <div className={styles.pageLayout}>
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
                  className={styles.radioGroup}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  value={selectedFilter}
                  size="small"
                  buttonStyle="solid"
                >
                  <Flex gap={12}>
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
                  </Flex>
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
                      <EmployeeCard employee={employee} onLike={() => null} />
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
