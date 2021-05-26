import React from "react";
import {
  KontaktWrapper,
  Input,
  Label,
  Button,
  Title2,
  Form,
  InputWrapper,
} from "../styles/Kontakt.style";

export const Kontakt = ({}) => {
  return (
    <KontaktWrapper>
      <Form>
        <Title2>Odaberite člana</Title2>
        <InputWrapper>
          <Label>Ivan</Label>
          <Input type="checkbox" name="member" />
          <Label>Karlo</Label>
          <Input type="checkbox" name="member" />
          <Label>Anja</Label>
          <Input type="checkbox" name="member" />
          <Label>Lea</Label>
          <Input type="checkbox" name="member" />
          <Label>Matija</Label>
          <Input type="checkbox" name="member" />
        </InputWrapper>

        <Input type="text" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit">Submit</Button>
      </Form>
    </KontaktWrapper>
  );
};

export default Kontakt;
