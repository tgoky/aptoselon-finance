import React, { useCallback, useEffect, useState } from 'react'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardIcon,
  Container,
  Separator,
  Spacer,
} from 'react-neu'
import styled from 'styled-components'

import StartPage from 'components/StartPage'
import StartPageHeader from 'components/StartPageHeader'
import StartSplit from 'components/StartSplit'

import CoinDeskIcon from 'components/icons/CoinDeskIcon'
import CoinTelegraphIcon from 'components/icons/CoinTelegraphIcon'
import ForbesIcon from 'components/icons/ForbesIcon'
import GizmodoIcon from 'components/icons/Gizmodo'
import TheDefiantIcon from 'components/icons/TheDefiantIcon'
import TheRegisterIcon from 'components/icons/TheRegisterIcon'

const ASTRONAUTS = [
  '👨‍🚀',
  '👨🏻‍🚀',
  '👨🏼‍🚀',
  '👨🏽‍🚀',
  '👨🏾‍🚀',
  '👩‍🚀',
  '👩🏻‍🚀',
  '👩🏼‍🚀',
  '👩🏽‍🚀',
  '👩🏾‍🚀‍',
  '👩🏿‍🚀'
]

const ELONS = [
  '🔥',
  '🚀',
  '🔥',
  '🚀',
  '🔥',
  '🚀',
  '🔥',
  '🚀',
  '🔥',
  '🚀',
  '🔥'
]


const Start: React.FC = () => {
  const [astronaut, setAstronaut] = useState('👨‍🚀')

  const [elons, setElons] = useState('🚀')

  const updateAstronaut = useCallback(() => {
    const newAstro = ASTRONAUTS[Math.floor(Math.random() * ASTRONAUTS.length)]
    setAstronaut(newAstro)
  }, [setAstronaut])

  useEffect(() => {
    const refresh = setInterval(updateAstronaut, 1000)
    return () => clearInterval(refresh)
  }, [updateAstronaut])


 // elon gif
  const updateElons = useCallback(() => {
    const newAstros = ELONS[Math.floor(Math.random() * ELONS.length)]
    setElons(newAstros)
  }, [setAstronaut])

  useEffect(() => {
    const refresh = setInterval(updateElons, 1000)
    return () => clearInterval(refresh)
  }, [updateElons])
  

  return (
    <StartPage>
      <StyledHero>
        <StartPageHeader
          icon={`${astronaut}❤️${elons} `}
          subtitle="Fair launch, open participation, and inclusive community."
          title="Fair finance, by the people, for the people."
        />
        <Container size="lg">
          <Box row justifyContent="center">
            <Button text="Buy Token" to="/dashboard" />
            <Spacer />
            <Button text="Join the Community" href="https://discord.com/invite/TgFpmDj" variant="secondary" />
          </Box>
        </Container>
      </StyledHero>
      <Container size="lg">
        {/*<Spacer size="md" />
        <Separator />
        <Spacer size="lg" />
        <StyledSectionIcon>⚖️</StyledSectionIcon>*/}
        <Spacer size="lg" />
        <StyledSectionTitle>Aptoselon finance for everyone.</StyledSectionTitle>
        <StyledSectionDescription>Aptoselon is owned and controlled by our community of aptoselon token holders.</StyledSectionDescription>
        <Spacer size="lg" />
        <StartSplit>
          <Card>
            <Spacer size="md" />
            <CardIcon>🗣️</CardIcon>
            <CardContent>
              <Box alignItems="center" column minHeight={125} maxHeight={125}>
                <StyledCardName>Decentralized governance</StyledCardName>
                <Spacer size="sm" />
                <StyledCardDescription>aptoselon holders decide Aptoselon's future via on-chain voting.</StyledCardDescription>
              </Box>
            </CardContent>
            <CardActions>
              <Box row justifyContent="center">
                <Button full text="Go vote" variant="secondary" to="/governance" />
              </Box>
            </CardActions>
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>👨‍🚀💰</CardIcon>
            <CardContent>
              <Box alignItems="center" column minHeight={125} maxHeight={125}>
                <StyledCardName>Aptoselon Docs</StyledCardName>
                <Spacer size="sm" />
                <StyledCardDescription>Aptoselon Docs are here to support projects that will bring value back to aptoselon.</StyledCardDescription>
              </Box>
            </CardContent>
            <CardActions>
              <Box row justifyContent="center">
                <Button
                  full
                  text="More info"
                  href="https://aptoselons-organization.gitbook.io/aptos-elon/"
                  variant="secondary"
                />
              </Box>
            </CardActions>
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>💸</CardIcon>
            <CardContent>
              <Box alignItems="center" column minHeight={125} maxHeight={125}>
                <StyledCardName>Growing treasury</StyledCardName>
                <Spacer size="sm" />
                <StyledCardDescription>The Aptoselon treasury is vibrant and growing.</StyledCardDescription>
              </Box>
            </CardContent>
            <CardActions>
              <Box row justifyContent="center">
                <Button full text="View treasury" variant="secondary" to="/dashboard" />
              </Box>
            </CardActions>
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>👨‍🌾</CardIcon>
            <CardContent>
              <Box alignItems="center" column minHeight={125} maxHeight={125}>
                <StyledCardName>Yield farming</StyledCardName>
                <Spacer size="sm" />
                <StyledCardDescription>Earn Aptoselons while helping aptoselon grow too.</StyledCardDescription>
              </Box>
            </CardContent>
            <CardActions>
              <Box row justifyContent="center">
                <Button full text="Start farming" variant="secondary" to="/farm" />
              </Box>
            </CardActions>
          </Card>
        </StartSplit>
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />
        <Box>
          <StyledSectionIcon>👁️</StyledSectionIcon>
          <Spacer size="lg" />
          <StyledSectionTitle>As seen in</StyledSectionTitle>
          <Spacer size="lg" />
          <StartSplit gapSize="lg">
            <StyledLogo>
              <CoinTelegraphIcon />
            </StyledLogo>
            <StyledLogo>
              <TheDefiantIcon />
            </StyledLogo>
            <StyledLogo>
              <CoinDeskIcon />
            </StyledLogo>
          </StartSplit>
          <Spacer size="lg" />
          <StartSplit gapSize="lg">
            <StyledLogo>
              <GizmodoIcon />
            </StyledLogo>
            <StyledLogo>
              <ForbesIcon />
            </StyledLogo>
            <StyledLogo>
              <TheRegisterIcon />
            </StyledLogo>
          </StartSplit>
          <Spacer size="lg" />
        </Box>
      </Container>
    </StartPage>
  )
}

const StyledHero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(80vh - 96px);
  max-height: 600px;
  min-height: 400px;
`

const StyledCardName = styled.div`
  color: ${props => props.theme.textColor};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`

const StyledCardDescription = styled.div`
  color: ${props => props.theme.colors.grey[500]};
  font-size: 16px;
  min-height: 56px;
  text-align: center;
`
const StyledSectionDescription = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  opacity: 0.66;
  font-weight: 400;
  text-align: center;
`

const StyledSectionTitle = styled.div`
  color: ${props => props.theme.colors.primary.main};
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: center;
`

const StyledSectionIcon = styled.div`
  font-size: 64px;
  text-align: center;
`

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.66;
`

export default Start
