/* eslint-disable @next/next/no-img-element */
"use client";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowForward } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  type Theme,
} from "@mui/material";
import useAnimateOnView from "./useAnimateOnView";

const Footer: React.FC = () => {
  const theme: Theme = useTheme();
  const [email, setEmail] = useState<string>("");

  const [logoRef, logoInView] = useAnimateOnView<HTMLImageElement>();
  const [navRef, navInView] = useAnimateOnView<HTMLUListElement>();
  const [emailRef, emailInView] = useAnimateOnView<HTMLDivElement>();
  const [socialRef, socialInView] = useAnimateOnView<HTMLDivElement>();
  const [lineRef, lineInView] = useAnimateOnView<HTMLDivElement>();
  const [copyrightRef, copyrightInView] = useAnimateOnView<HTMLDivElement>();

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className="footer-background overflow-x-hidden">
        <div className="footer-list">
          <motion.img
            ref={logoRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              logoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            src="/logo/Trackem-Logo.png"
            alt="logo"
          />

          <motion.ul
            ref={navRef}
            initial={{ opacity: 0, y: 50 }}
            animate={navInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#downloads">Downloads</a>
            </li>
          </motion.ul>

          <motion.div
            ref={emailRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              emailInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="footer-email"
          >
            <FormControl
              sx={{
                m: 1,
                width: "26ch",
                borderRadius: "70ch",
                [theme.breakpoints.down(1200)]: { width: "22ch" },
                [theme.breakpoints.down(970)]: { width: "19ch" },
              }}
              variant="outlined"
            >
              <InputLabel
                sx={{
                  top: "-6px",
                  [theme.breakpoints.down(970)]: { fontSize: ".8rem" },
                }}
                htmlFor="outlined-adornment-email"
              >
                Enter your email
              </InputLabel>

              <OutlinedInput
                sx={{
                  backgroundColor: "white",
                  borderRadius: "40px",
                  height: "40px",
                }}
                id="outlined-adornment-email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="Subscribe to newsletter">
                      <ArrowForward
                        sx={{
                          color: "white",
                          backgroundColor: "#FFA337",
                          borderRadius: 20,
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
                label="Enter your email"
              />
            </FormControl>
            <p>
              Manage your email subscription easily—unsubscribe by clicking{" "}
              <b>here</b>.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={socialRef}
          initial={{ opacity: 0, y: 50 }}
          animate={socialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="logos"
        >
          <a
            href="https://www.facebook.com/irenictech/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/logo/facebook.png" alt="Facebook logo" />
          </a>
          <a href="https://x.com/irenictech" target="_blank" rel="noreferrer">
            <img src="/logo/X.png" alt="Twitter/X logo" />
          </a>
          <a
            href="https://www.linkedin.com/company/irenictech/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/logo/linkedin.png" alt="LinkedIn logo" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=971503468938"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/logo/whatsapp.png" alt="WhatsApp logo" />
          </a>
        </motion.div>

        <motion.div
          ref={lineRef}
          initial={{ opacity: 0, y: 50 }}
          animate={lineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="line"
        ></motion.div>

        <motion.div
          ref={copyrightRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            copyrightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="copyright"
        >
          <p>© Copyright by Trackem – All right reserved.</p>
          <div className="product">
            <p>A product of - </p>
            <a
              href="https://www.irenictech.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/logo/IrenicTech_Logo_LS (4) 2 (1).png"
                alt="IrenicTech logo"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
