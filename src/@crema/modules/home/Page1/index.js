/* eslint-disable prettier/prettier */

import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import {
  pricingData,
  tableData,
  pricingFaq,
} from '@crema/mockapi/fakedb/extraPages';
import {Typography, Col, Row} from 'antd';
import AppCard from '@crema/components/AppCard';
import {
  StyledHeading,
  StyledLovePeopleImgWrapper,
  StyledLovePeopleWrapper,
  StyledSwitchBtn,
  StyledSwitchBtnSuffix,
  StyledSwitchWrapper,
} from './index.styled.js';
import {
  LovePeople,PricingFaq
} from '@crema/modules/extraPages/Pricing';
const Page1 = () => {
  return (
    <>
    <AppRowContainer>
            <StyledLovePeopleWrapper>
        <StyledLovePeopleImgWrapper>
          <img src='/assets/images/heartglobe.svg' alt='heartglobe' />
        </StyledLovePeopleImgWrapper>
        <Typography.Title
          level={2}
          style={{
            margin: 'auto',
            width: '60%',
            fontSize: 28,
            display: 'block',
            textAlign: 'center',
          }}
        >
          DỊCH VỤ THIẾT KẾ WEBSITE, ỨNG DỤNG, HẠ TẦNG CNTT
        </Typography.Title>
      </StyledLovePeopleWrapper>
      <Col xs={24}>
        <LovePeople data={pricingData.lovePeople} />
      </Col>
      <Col xs={24} style={{marginTop: 28}}>
        <PricingFaq pricingFaq={pricingFaq} />
      </Col>
      </AppRowContainer>
    </>
  );
};

export default Page1;
