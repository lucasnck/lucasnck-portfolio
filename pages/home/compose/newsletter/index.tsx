import * as React from "react";
import { Button, Container, Flex, Text, Input, TextArea, FormItem, Modal, useModal } from "../../../../components";
import { NewsletterForm, NewsletterSkewed, NewsletterStyle } from "./style";
import { useForm, ValidationError } from "@formspree/react";
import { ErrorMessage } from "../../../../components/form-item/style";
import { useState } from "react";

export interface INewsletterProps {}

export default function Newsletter(props: INewsletterProps) {
  const modal = useModal();
  const [state, handleSubmit] = useForm("xzbyvdrq");
  const [loading, setLoading] = useState(false);

  if (state.success) {
    (document.getElementById("newsletter-form") as any).reset();
    modal.setShow(true);
  }
  
  const onSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      await handleSubmit(event);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NewsletterStyle>
        <NewsletterSkewed />
        <Container>
          <Flex column rowMd>
            <div>
              <Text as="h2" type="primary">
                O que acha de mantermos contato? — Inscreva-se aqui.
              </Text>
              <Text as="p" type="light">
                Podemos conversar sobre tecnologia, propostas de projetos ou trabalhos na área. E se só estiver querendo
                fazer networking seja bem-vindo.
              </Text>
            </div>
            <NewsletterForm id="newsletter-form" onSubmit={onSubmit}>
              <Flex column>
                <FormItem id="nickname">
                  <Input colorType="primary" name="nickname" placeholder="nickname" skewed />
                  <ErrorMessage>
                    <ValidationError prefix="nickname" field="nickname" errors={state.errors} />
                  </ErrorMessage>
                </FormItem>

                <FormItem id="email">
                  <Input type="email" colorType="primary" name="email" placeholder="e-mail" skewed />
                  <ErrorMessage>
                    <ValidationError prefix="email" field="email" errors={state.errors} />
                  </ErrorMessage>
                </FormItem>

                <FormItem id="message">
                  <TextArea colorType="primary" name="message" placeholder="message" skewed rows={8} />
                  <ErrorMessage>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </ErrorMessage>
                </FormItem>

                <Flex centeredX>
                  <div>
                    {loading ? (
                      <Button type="secondary" outlined skewed disabled={true}>
                        <span>sending your .json</span>
                      </Button>
                    ) : (
                      <Button type="primary" outlined skewed>
                        <span>Contact me</span>
                      </Button>
                    )}
                  </div>
                </Flex>
              </Flex>
            </NewsletterForm>
          </Flex>
        </Container>
      </NewsletterStyle>
      <Modal show={modal.show} toggle={modal.toggle}>
        <Text as="h3" type="light">
          Obrigado pela sua mensagem!
        </Text>
        <Text as="p" type="light">
          Assim que for possível eu entrarei em contato com você.
        </Text>
      </Modal>
    </>
  );
}
