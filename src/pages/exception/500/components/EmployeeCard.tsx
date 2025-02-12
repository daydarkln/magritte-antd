// components/EmployeeCard.tsx
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Avatar, Badge, Card, Col, Row, Space, Typography } from 'antd';
import { useStyles } from '../styles';
import { Employee } from './types';

const { Text, Title } = Typography;

const ContactInfo = ({ icon, text }: { icon: string; text: string }) => (
  <Col>
    <Space>
      <img src={icon} />
      <Text className="contact-text">{text}</Text>
    </Space>
  </Col>
);

export const EmployeeCard = ({
  employee,
  onLike,
}: {
  employee: Employee;
  onLike: (employee: Employee) => void;
}) => {
  const { styles } = useStyles();
  return (
    <Card>
      <Row align="top" gutter={24}>
        <Col>
          <Badge
            dot
            count={employee.isOnline ? 1 : 0}
            className={`online-badge ${styles.onlineBadge}`}
          >
            <Avatar shape="square" size={96} src={employee.image} />
          </Badge>
        </Col>
        <Space direction="vertical" size={4} style={{ flexGrow: 1 }}>
          <Title level={4}>{employee.fullName}</Title>
          <Text style={{ fontSize: 16 }}>{employee.position}</Text>
          <Text type="secondary">{employee.department}</Text>
        </Space>
        <Col>
          {employee.liked ? (
            <HeartFilled className={`active ${styles.likeIcon}`} onClick={() => onLike(employee)} />
          ) : (
            <HeartOutlined className={styles.likeIcon} onClick={() => onLike(employee)} />
          )}
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: 7 }}>
        <ContactInfo icon="/icons/contacts/mail.svg" text={employee.contacts.email} />
        <ContactInfo icon="/icons/contacts/tg.svg" text={employee.contacts.telegram} />
        <ContactInfo icon="/icons/contacts/message.svg" text={employee.contacts.messenger} />
        <ContactInfo icon="/icons/contacts/phone.svg" text={employee.contacts.phone} />
      </Row>
    </Card>
  );
};
