package br.com.prova.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import br.com.prova.model.bo.ClienteBO;
import br.com.prova.model.vo.ClienteVO;

@Path("/Cadastro/Cliente")
public class ClienteResource {

    ClienteBO clienteBO = new ClienteBO();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response cadastrar(ClienteVO cliente, @Context UriInfo uriInfo ) {
        clienteBO.formatarData(cliente);

        UriBuilder builder = uriInfo.getAbsolutePathBuilder();
        builder.path(Integer.toString(cliente.getIdCliente()));
        
        return Response.created(builder.build()).build();
    }
    
	@GET
	@Path("/{usuario}")
	@Produces(MediaType.APPLICATION_JSON)
	public ClienteVO buscar(@PathParam("usuario")String usuario) {
		return ClienteBO.listar(usuario);
	}
}