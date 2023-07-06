<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\EventRecourse;
use App\Http\Traits\CanLoadRelationships;

class EventController extends Controller
{

    use CanLoadRelationships;

    private array $relations = [
        "user",
        "attenddes",
        "attendees.user"
    ];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $query = $this->loadRelationships(Event::query());

        return EventRecourse::collection(
            $query->latest()->paginate()
        );
        return EventRecourse::collection(Event::all());
        // return EventRecourse::collection(Event::with("user")->get());
        // return Event::all();
        // return User::all();

        // $query = Event::query();
        // $relations = ['user', 'attendees', 'attendees.user'];

        // foreach ($relations as $relation) {
        //     $query->when(
        //         $this->shouldIncludeRelation($relation),
        //         fn($q) => $q->with($relation)
        //     );
        // }
        // $query = $this->loadRelationships(Event::query());

        // return EventRecourse::collection(
        //     $query->latest()->paginate()
        // );
    }
    

    // protected function shouldIncludeRelation(string $relation): bool
    // {
    //     $include = request()->query('include');

    //     if (!$include) {
    //         return false;
    //     }

    //     $relations = array_map('trim', explode(',', $include));

    //     return in_array($relation, $relations);
    // }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // $event = Event::create([
        //     ...$request->validate([
        //         'name' => 'required|string|max:255',
        //         'description' => 'nullable|string',
        //         'start_time' => 'required|date',
        //         'end_time' => 'required|date|after:start_time'
        //     ]),
        //     'user_id' => 1
        // ]);

        // return $event;

        // return new EventResource($event);

        $event = Event::create(
            [
                ...$request->validate(
                    [
                        'name' => 'required|string|max:255',
                        'description' => 'nullable|string',
                        'start_time' => 'required|date',
                        'end_time' => 'required|date|after:start_time'
                    ]
                ),
                'user_id' => 1
            ]
        );

        return new EventRecourse($this->loadRelationships($event));
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {

        // return $event;

        // $event->load("user", "attendees");
        // return new EventResource($event);
        return new EventRecourse($this->loadRelationships($event));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {

        // $event->update(
        //     $request->validate([
        //         'name' => 'sometimes|string|max:255',
        //         'description' => 'nullable|string',
        //         'start_time' => 'sometimes|date',
        //         'end_time' => 'sometimes|date|after:start_time'
        //     ])
        // );

        // return $event;

        $event->update(
            $request->validate(
                [
                    'name' => 'sometimes|string|max:255',
                    'description' => 'nullable|string',
                    'start_time' => 'sometimes|date',
                    'end_time' => 'sometimes|date|after:start_time'
                ]
            ),
        );

        return new EventRecourse($this->loadRelationships($event));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json([
            "message" => "Successfully deleted"
        ]);

        // return response(status: 204);
    }
}