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

import br.com.prova.model.bo.VeiculoBO;
import br.com.prova.model.vo.VeiculoVO;

@Path("/Cadastro/Veiculo")
public class VeiculoResource {

    VeiculoBO veiculoBO = new VeiculoBO();

    @GET
    @Path("/{usuario}")
    @Produces(MediaType.APPLICATION_JSON)
    public int buscar(@PathParam("usuario") String usuario) {
        return VeiculoBO.getId(usuario);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response cadastrar(VeiculoVO veiculo, @Context UriInfo uriInfo ) {
    	
    	System.out.println("teste");
    	veiculoBO.inserirBanco(veiculo);

        UriBuilder builder = uriInfo.getAbsolutePathBuilder();
        builder.path(Integer.toString(veiculo.getIdCliente()));
        
        return Response.created(builder.build()).build();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<VeiculoVO> buscar() {           
        return VeiculoBO.listar();
    }
    
    @GET
    @Path("/Consulta/{usuario}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<VeiculoVO> buscarVeicula(@PathParam("usuario") String usuario) {
        return VeiculoBO.getVeiculos(usuario);
    }
}
