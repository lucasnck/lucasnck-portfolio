import { useForm, ValidationError } from "@formspree/react";
import React, { useState } from "react";
import { Button } from "../button";
import { Container } from "../container";
import { Flex } from "../flex";
import { FormItem } from "../form-item";
import { ErrorMessage } from "../form-item/style";
import { Input } from "../input";
import { Mark } from "../mark";
import { Modal, useModal } from "../modal";
import { Text } from "../text";
import { TextArea } from "../textarea";
import { NewsletterForm, NewsletterSkewed, NewsletterStyle } from "./style";

export interface INewsletterProps {}

export function Newsletter(props: INewsletterProps) {
  const modal = useModal();
  const [state, handleSubmit] = useForm("xzbyvdrq");
  const [loading, setLoading] = useState(false);

  if (state.succeeded) {
    (document.getElementById("newsletter-form") as HTMLFormElement).reset();
    modal.setShow(true);
  }

  const onSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      await handleSubmit(event);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter">
      <NewsletterStyle>
        <NewsletterSkewed />
        <Container>
          <Flex column rowMd>
            <Flex column>
              <Text as="h2" type="primary">
                Let's make networking? - Send me a message.
              </Text>
              <Text as="p" type="light">
                We can talk about technology, job proposals, freelance jobs, projects development, or just networking.
                I'm also <Mark type="secondary">looking</Mark> for developers to{" "}
                <Mark type="secondary">work with me</Mark> in my current job. But I can also refer you to other jobs if
                you like.
              </Text>
            </Flex>
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
                      <Button type="secondary" outlined skewed disabled>
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
    </section>
  );
}
