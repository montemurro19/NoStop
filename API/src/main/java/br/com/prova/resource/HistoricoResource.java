package br.com.prova.resource;

import java.util.List;

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

import br.com.prova.model.bo.HistoricoBO;
import br.com.prova.model.vo.HistoricoVO;


@Path("/Historico")
public class HistoricoResource {

	@GET
	@Path("/{usuario}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<HistoricoVO> buscar(@PathParam("usuario")String usuario) {
		return HistoricoBO.listar(usuario);
	}
	
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response cadastrar(HistoricoVO historicoVO, @Context UriInfo uriInfo ) {
    	HistoricoBO.inserirAvaliacao(historicoVO);

        UriBuilder builder = uriInfo.getAbsolutePathBuilder();
        builder.path(Integer.toString(1));
        
        return Response.created(builder.build()).build();
    }

}
