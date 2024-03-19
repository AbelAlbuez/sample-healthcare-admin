using MediatR;
using Microsoft.AspNetCore.Mvc;
using sample.healthcare.application.Commands.Patients;
using sample.healthcare.application.Queries.Patients;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace sample.healthcare.api.Controllers
{
    [Route("api/[controller]")]
    public class PatientsController : Controller
    {
        private readonly IMediator _mediator;
        public PatientsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/patiens
        [HttpGet]
        public async Task<ActionResult> GetPatients()
        {
            var query = new GetAllPatientsQuery();
            var patients = await _mediator.Send(query);

            if (patients == null || patients.Count == 0)
            {
                return NotFound();
            }

            return Ok(patients);
        }

        // GET api/patiens/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetPatient(int id)
        {
            var result = await _mediator.Send(new GetPatientByIdQuery(id));
            return Ok(result);
        }

        // POST api/patiens
        [HttpPost()]
        public async Task<IActionResult> CreatePatient([FromBody] Params parameters)
        {
            var command = new CreatePatientCommand(parameters);
            var patientId = await _mediator.Send(command);

            return Ok(patientId);
        }

        // PUT api/patiens/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePatient(int id, [FromBody] Params parameters)
        {
            var command = new UpdatePatientCommand(id, parameters.FirstName, parameters.LastName, parameters.DateOfBirth);
            var result = await _mediator.Send(command);

            if (result)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        // DELETE api/patiens/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatient(int id)
        {
            var command = new DeletePatientCommand(id);
            var result = await _mediator.Send(command);

            if (result)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}

