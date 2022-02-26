const Handlebars = require("handlebars");
const mjml2html = require("mjml");

const loginTemplate = (context) => {
  const template = Handlebars.compile(`
  <mjml>
  <mj-head>
    <mj-title>Discount Light</mj-title>
    <mj-preview>Pre-header Text</mj-preview>
    <mj-attributes>
      <mj-all font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"></mj-all>
      <mj-text font-weight="400" font-size="16px" color="#000000" line-height="24px" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"></mj-text>
    </mj-attributes>
    <mj-style inline="inline">
      .body-section { -webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); }
    </mj-style>
    <mj-style inline="inline">
      .text-link { color: #5e6ebf }
    </mj-style>
    <mj-style inline="inline">
      .footer-link { color: #888888 }
    </mj-style>
  </mj-head>
  <mj-body background-color="#E7E7E7" width="600px">
    <mj-section full-width="full-width" background-color="#002C58" padding-bottom="0">
      <mj-wrapper>
        <mj-section background-color="#16AFD2" width="600px">
          <mj-column width="100%">
						<mj-text color="#ffffff" font-weight="bold" font-size="20px">
            asobal
          	</mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    </mj-section>
    <mj-wrapper padding-top="0" padding-bottom="0" css-class="body-section">
      <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px">
        <mj-column width="100%">
          <mj-text color="#212b35" font-weight="bold" font-size="20px">
            Bienvenido a Hackithon Asobal App
          </mj-text>
          <mj-text color="#637381" font-size="16px">
            Hola!,
          </mj-text>
          <mj-text color="#637381" font-size="16px">
            ASOBAL es la Asociación de Clubes Españoles de Balonmano, entidad de carácter deportivo y sin ánimo de lucro, inscrita en el Registro de Asociaciones Deportivas del Consejo Superior de Deportes.
          </mj-text>
          <mj-text color="#637381" font-size="16px">
            Te invitamos a nuestra App
          </mj-text>
          <mj-button background-color="#002C58" align="center" color="#ffffff" font-size="17px" font-weight="bold" href={{url}} width="300px">
            Iniciar Sesión
          </mj-button>
          <mj-text color="#637381" font-size="16px" padding-top="30px">
            Puedes <a class="text-link" color="002C58" href="mailto:hackathon.asobal@gmail.com">contactarnos</a> en cualquier momento.
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px" padding-top="0">
        <mj-column width="100%">
          <mj-divider border-color="#DFE3E8" border-width="1px" />
        </mj-column>
      </mj-section>
      <mj-section background-color="#ffffff" padding="0 15px 0 15px">
        <mj-column width="100%">
          <mj-text color="#212b35" font-weight="bold" font-size="20px" padding-bottom="0">
            Proudly developed by Alegna, Cisco & Luismi
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px">
      </mj-section>
    </mj-wrapper>
    <mj-wrapper full-width="full-width">
      <mj-section>
        <mj-column width="100%" padding="0">
          <mj-social font-size="15px" icon-size="30px" mode="horizontal" padding="0" align="center">
            <mj-social-element name="instagram" href="https://www.instagram.com/asobal" background-color="#A1A0A0">
            </mj-social-element>
            <mj-social-element name="twitter" href="https://twitter.com/ASOBAL" background-color="#A1A0A0">
            </mj-social-element>
            <mj-social-element name="facebook" href="https://www.facebook.com/ASOBAL" background-color="#A1A0A0">
            </mj-social-element>
            <mj-social-element name="youtube" href="https://www.youtube.com/user/LigaASOBAL?gl=ES&hl=es" background-color="#A1A0A0">
            </mj-social-element>
          </mj-social>
          <mj-text color="#445566" font-size="11px" align="center" line-height="16px">
            You are receiving this email regarding your Asobal Hackithon platform subscription! Asobal Hackithon is an app developed by the Ironhack & Asobal Hackathon.
          </mj-text>
          <mj-text color="#445566" font-size="11px" align="center" line-height="16px">
            &copy;Hackithon, All Rights Reserved.
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  </mj-body>
</mjml>`);
  return mjml2html(template(context)).html;
};

module.exports = {
  loginTemplate,
};
