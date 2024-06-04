import AppRowContainer from '@crema/components/AppRowContainer';
import React from 'react';
import {Typography, Col, Collapse, theme} from 'antd';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';
import {StyledPrimaryText, StyledSecondaryText} from './index.styled';
import PropTypes from 'prop-types';
/* eslint-disable prettier/prettier */

const {Panel} = Collapse;

const PricingFaq = ({pricingFaq}) => {
  const {token} = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <AppRowContainer>
      <Col xs={24} sm={10}>
        <StyledPrimaryText>Hỗ trợ</StyledPrimaryText>
        <Typography.Title
          level={2}
          style={{marginTop: 8, marginBottom: 8, fontSize: 36}}
        >
          FAQs
        </Typography.Title>
        <StyledSecondaryText>
        Mọi thứ bạn cần biết về sản phẩm và thanh toán. Không thể tìm thấy câu trả lời bạn đang tìm kiếm? Hãy trò chuyện với đội ngũ của chúng tôi.
        </StyledSecondaryText>
      </Col>
      <Col xs={24} sm={14}>
        <Collapse
          style={{
            background: 'transparent',
          }}
          bordered={false}
          expandIcon={({isActive}) =>
            isActive ? (
              <AiOutlineMinusCircle size={20} />
            ) : (
              <AiOutlinePlusCircle size={20} />
            )
          }
          expandIconPosition='end'
        >
          {pricingFaq.map((item) => {
            return (
              <Panel header={item.ques} key={item.id} style={panelStyle}>
                <div>{item.ans}</div>
              </Panel>
            );
          })}
        </Collapse>
      </Col>
    </AppRowContainer>
  );
};

export default PricingFaq;

PricingFaq.propTypes = {
  pricingFaq: PropTypes.array,
};
