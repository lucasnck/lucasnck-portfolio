import { useForm, ValidationError } from "@formspree/react";
import { ErrorPayload } from "@formspree/react/dist/types/src/types";
import React, { useEffect, useRef, useState } from "react";
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

function validateForm() {
  const fields = ["name", "email", "message"];

  const formErrors = [];
  fields.forEach((n) => {
    const element = document.getElementsByName(n)[0];
    const value = (element as HTMLInputElement)?.value;
    if (!value) {
      formErrors.push({ code: "REQUIRED", field: n, message: `is required` });
    }
  });

  return formErrors;
}

export function Newsletter(props: INewsletterProps) {
  const modal = useModal();
  const ref = useRef(false);
  const [state, handleSubmit] = useForm("xzbyvdrq");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorPayload[]>([]);

  useEffect(() => {
    if (!ref.current && state.succeeded) {
      ref.current = true;
      (document.getElementById("newsletter-form") as HTMLFormElement).reset();
      modal.setShow(true);
    }
  }, [modal, state]);

  useEffect(() => {
    if (state.errors) {
      setErrors(state.errors);
    }
  }, [state.errors]);

  const onSubmit = async (event) => {
    try {
      setErrors([]);
      ref.current = false;
      setLoading(true);
      event.preventDefault();

      const formErrors = validateForm();

      if (formErrors.length) {
        setErrors(formErrors);
      } else {
        await handleSubmit(event);
      }
    } catch (e) {
      setErrors(e);
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
                <FormItem id="name">
                  <Input colorType="primary" name="name" placeholder="nickname" skewed />
                  <ErrorMessage>
                    <ValidationError prefix="name" field="name" errors={errors} />
                  </ErrorMessage>
                </FormItem>

                <FormItem id="email">
                  <Input type="email" colorType="primary" name="email" placeholder="e-mail" skewed />
                  <ErrorMessage>
                    <ValidationError prefix="email" field="email" errors={errors} />
                  </ErrorMessage>
                </FormItem>

                <FormItem id="message">
                  <TextArea colorType="primary" name="message" placeholder="message" skewed rows={8} />
                  <ErrorMessage>
                    <ValidationError prefix="Message" field="message" errors={errors} />
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
