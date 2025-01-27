import styled, { keyframes, css } from "styled-components";
import {
  TextProps,
  ParagraphProps,
  colorsKeyframes,
  ButtonProps,
  LinkProps,
  ImageProps,
} from "./types-styled";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const Context = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 10rem;
`;

const createColorChangeAnimation = (
  keyframesColors?: colorsKeyframes
) => keyframes<colorsKeyframes>`
  0% {
    color: ${keyframesColors?.colorPrimary};
  }
  33% {
    color: ${keyframesColors?.colorSecondary};
  }
  66% {
    color: ${keyframesColors?.colorTertiary};
  }
  99% {
    color: ${keyframesColors?.colorQuaternary};
  }
`;

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  color: ${({ color }) => color || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};
  word-spacing: ${({ wordSpacing }) => wordSpacing || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-shadow: ${({ textShadow }) => textShadow || ""};
  text-decoration-color: ${({ textDecorationColor }) =>
    textDecorationColor || ""};
  text-decoration-style: ${({ textDecorationStyle }) =>
    textDecorationStyle || ""};
  text-decoration-thickness: ${({ textDecorationThickness }) =>
    textDecorationThickness || ""};
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  display: ${({ display }) => display || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  align-items: ${({ alignItems }) => alignItems || ""};

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity ${({ opacityNumber }) => opacityNumber} ease-in-out,
    transform ${({ transformNumber }) => transformNumber} ease-in-out;
  transition-delay: ${({ transitionDelayNumber }) => transitionDelayNumber};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(100%)"};
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
  color: ${({ color }) => color || ""};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};
  word-spacing: ${({ wordSpacing }) => wordSpacing || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-decoration-color: ${({ textDecorationColor }) =>
    textDecorationColor || ""};
  text-decoration-style: ${({ textDecorationStyle }) =>
    textDecorationStyle || ""};
  text-decoration-thickness: ${({ textDecorationThickness }) =>
    textDecorationThickness || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  display: ${({ display }) => display || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  transition: ${({ transition }) => transition || ""};
  border: ${({ border }) => border || ""};
  border-color: ${({ borderColor }) => borderColor || ""};
  border-width: ${({ borderWidth }) => borderWidth || ""};
  border-style: ${({ borderStyle }) => borderStyle || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  padding: ${({ padding }) => padding || ""};
  margin: ${({ margin }) => margin || ""};
  cursor: ${({ cursor }) => cursor || ""};
  background-image: ${({ backgroundImage }) => backgroundImage || ""};
  opacity: ${({ opacity }) => opacity || ""};
  position: ${({ position }) => position || ""};
  left: ${({ left }) => left || ""};
  top: ${({ top }) => top || ""};
  right: ${({ right }) => right || ""};
  bottom: ${({ bottom }) => bottom || ""};

  ${({ isHover, hover }) =>
    isHover &&
    css`
      &:hover {
        transform: ${hover?.transform || ""};
        opacity: ${hover?.opacity || ""};
      }
    `}
`;

export const ButtonConfig = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
  color: ${({ color }) => color || ""};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};
  word-spacing: ${({ wordSpacing }) => wordSpacing || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-decoration-color: ${({ textDecorationColor }) =>
    textDecorationColor || ""};
  text-decoration-style: ${({ textDecorationStyle }) =>
    textDecorationStyle || ""};
  text-decoration-thickness: ${({ textDecorationThickness }) =>
    textDecorationThickness || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  display: ${({ display }) => display || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  transition: ${({ transition }) => transition || ""};
  border: ${({ border }) => border || ""};
  border-color: ${({ borderColor }) => borderColor || ""};
  border-width: ${({ borderWidth }) => borderWidth || ""};
  border-style: ${({ borderStyle }) => borderStyle || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  padding: ${({ padding }) => padding || ""};
  margin: ${({ margin }) => margin || ""};
  cursor: ${({ cursor }) => cursor || ""};
  background-image: ${({ backgroundImage }) => backgroundImage || ""};
  opacity: ${({ opacity }) => opacity || ""};
  position: ${({ position }) => position || ""};
  left: ${({ left }) => left || ""};
  top: ${({ top }) => top || ""};
  right: ${({ right }) => right || ""};
  bottom: ${({ bottom }) => bottom || ""};
  margin-left: ${({ marginLeft }) => marginLeft || ""};
  margin-right: ${({ marginRight }) => marginRight || ""};
  margin-top: ${({ marginTop }) => marginTop || ""};
  margin-bottom: ${({ marginBottom }) => marginBottom || ""};

  ${({ isHover, hover }) =>
    isHover &&
    css`
      &:hover {
        transform: ${hover?.transform || ""};
        opacity: ${hover?.opacity || ""};
      }
    `}

  transition: transform 0.5s ease;
  transform-origin: center;
  transform: ${({ rotate }) => (rotate ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const Link = styled.a<LinkProps>`
  color: ${({ color }) => color || ""};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};
  word-spacing: ${({ wordSpacing }) => wordSpacing || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-decoration-color: ${({ textDecorationColor }) =>
    textDecorationColor || ""};
  text-decoration-style: ${({ textDecorationStyle }) =>
    textDecorationStyle || ""};
  text-decoration-thickness: ${({ textDecorationThickness }) =>
    textDecorationThickness || ""};
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
`;

type DivButtonAndConfigProps = {
  isVisible?: boolean;
  opacity?: number;
  transition?: string;
  transitionDelay?: string;
};

export const DivButtonAndConfig = styled.div<DivButtonAndConfigProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-top: 2rem;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transition-delay: 1.4s;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(100%)"};
`;

export const Text = styled.h1<TextProps>`
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  color: ${({ color }) => color || ""};
  word-spacing: ${({ wordSpacing }) => wordSpacing || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};

  ${({ isKeyframes, keyframesColors }) =>
    isKeyframes &&
    css`
      animation: ${createColorChangeAnimation(keyframesColors)} 3.5s infinite;
    `}

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity ${({ opacityNumber }) => opacityNumber} ease-in-out,
    transform ${({ transformNumber }) => transformNumber} ease-in-out;
  transition-delay: ${({ transitionDelayNumber }) => transitionDelayNumber};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(100%)"};
`;

export const ImageConfig = styled.img<ImageProps>`
  width: ${({ width }) => width || "22px"};
  height: ${({ height }) => height || "22px"};
  background-size: ${({ backgroundSize }) => backgroundSize || "60%"};
  cursor: ${({ cursor }) => cursor || ""};
  border: ${({ border }) => border || ""};
  border-color: ${({ borderColor }) => borderColor || ""};
  border-width: ${({ borderWidth }) => borderWidth || ""};
  border-style: ${({ borderStyle }) => borderStyle || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  color: ${({ color }) => color || ""};
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
  opacity: ${({ opacity }) => opacity || ""};
`;
