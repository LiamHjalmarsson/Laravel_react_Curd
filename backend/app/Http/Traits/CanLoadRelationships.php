<?php

namespace App\Http\Traits;

use Illuminate\Contracts\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Contracts\Database\Query\Builder as QueryBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

trait CanLoadRelationships
{
    // This trait provides a method for loading relationships on a model or query builder
    public function loadRelationships(
        Model|QueryBuilder|EloquentBuilder|HasMany $for,
        ?array $relations = null
    ): Model|QueryBuilder|EloquentBuilder|HasMany {
    
        // If no specific relationships are passed, use the default ones defined in the trait or an empty array
        $relations = $relations ?? $this->relations ?? [];

        // Loop through each relation and load it if it should be included based on the request parameters
        foreach ($relations as $relation) {
            $for->when(
                $this->shouldIncludeRelation($relation),
                fn($q) => $for instanceof Model ? $for->load($relation) : $q->with($relation)
            );
        }

        // Return the model or query builder with loaded relationships
        return $for;
    }

    // Check if a given relation should be included based on the "include" parameter in the request
    protected function shouldIncludeRelation(string $relation): bool {
        // Get the value of the "include" query parameter from the current request
        $include = request()->query('include');

        // If the "include" parameter is not present, the relation should not be included
        if (!$include) {
            return false;
        }

        // Extract the individual relations from the "include" parameter and trim whitespace
        $relations = array_map('trim', explode(',', $include));

        // Check if the given relation is present in the list of relations to include
        return in_array($relation, $relations);
    }
}