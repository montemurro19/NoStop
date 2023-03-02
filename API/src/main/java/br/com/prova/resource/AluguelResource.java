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

import br.com.prova.model.bo.AluguelBO;
import br.com.prova.model.vo.AluguelVO;


@Path("/Aluguel")
public class AluguelResource {

    @GET
    @Path("/{usuario}")
    @Produces(MediaType.APPLICATION_JSON)
    public int buscar(@PathParam("usuario") String usuario) {
        return AluguelBO.getId(usuario);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response cadastrar(AluguelVO AluguelVO, @Context UriInfo uriInfo ) {
    	
    	System.out.println("teste");
    	AluguelBO.inserirBanco(AluguelVO);

        UriBuilder builder = uriInfo.getAbsolutePathBuilder();
        builder.path(Integer.toString(AluguelVO.getIdCliente()));
        
        return Response.created(builder.build()).build();
    }
}
