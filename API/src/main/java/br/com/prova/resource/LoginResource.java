package br.com.prova.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.prova.model.vo.LoginVO;
import br.com.prova.model.bo.LoginBO;

@Path("/Login")
public class LoginResource {
	
    LoginBO loginBO = new LoginBO();
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response logar(LoginVO loginVO) {
        return Response.status(200).entity(loginBO.verificarLogin(loginVO)).build();
    }
	
}
